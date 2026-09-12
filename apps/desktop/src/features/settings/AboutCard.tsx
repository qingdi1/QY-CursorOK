import { useEffect, useState } from "react";
import { api } from "../../shared/api";
import { currentAppVersion } from "../../shared/native/appLifecycle";
import { Button } from "../../shared/ui/Button";
import { TitledCard } from "../../shared/ui/TitledCard";
import { useMessage } from "../../shared/ui/message";
import styles from "./AboutCard.module.scss";

const qingyunGatewayUrl = "https://api.qinggekeji.top";

export function AboutCard() {
  const message = useMessage();
  const [version, setVersion] = useState("…");

  useEffect(() => {
    let disposed = false;
    void currentAppVersion().then((next) => {
      if (!disposed) setVersion(next);
    });
    return () => { disposed = true; };
  }, []);

  return <TitledCard title={t("关于")}>
    <div className={styles.content}>
      <strong>{t("青云currsor小助手")}</strong>
      <span>{t("版本 {version}", { version })}</span>
      <p>{t("本应用基于 CursorOK 助手二改。")}</p>
      <p>{t("推荐使用青云聚汇中转站接入模型服务。")}</p>
      <Button
        size="small"
        variant="primary"
        className={styles.action}
        onClick={() => {
          void api.openExternalUrl(qingyunGatewayUrl)
            .catch((cause) => message(cause instanceof Error ? cause.message : String(cause)));
        }}
      >
        {t("打开青云聚汇")}
      </Button>
    </div>
  </TitledCard>;
}
