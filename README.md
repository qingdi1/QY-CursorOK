<div align="center">

# 青云currsor小助手

青云currsor小助手 is a local implementation of Cursor's backend.

本应用基于 CursorOK 助手二改。推荐使用青云聚汇中转站：https://api.qinggekeji.top

User guide: https://qingdi1.github.io/QY-CursorOK/

</div>

![Connect 青云currsor小助手 to a wide range of model APIs](./images/en-brand-1.png)

![青云currsor小助手 dashboard](./images/en-home-1.png)

## About

青云currsor小助手 is a local model gateway for Cursor. It runs a service on your machine that connects Cursor to the model APIs you configure, routes model requests through your own providers, and preserves Cursor Agent capabilities such as tool calling, Skills, and MCP.

This build is a derivative of CursorOK.

You can connect OpenAI- and Anthropic-compatible services, customize endpoints, model IDs, API keys, and request parameters, and use model channels beyond the options built into the platform.

> [!IMPORTANT]
> 青云currsor小助手 is free to use, but the model APIs you connect may charge for usage. This is an independent project and is not affiliated with or endorsed by Cursor or its developers.

## Features

- **Bring your own model channels:** Configure your own API endpoint, credentials, and model IDs.
- **Multiple API protocols:** Use OpenAI- and Anthropic-compatible APIs or a custom endpoint.
- **Model management:** Add, duplicate, edit, reorder, and batch-test multiple model configurations.
- **Connection benchmarks:** Measure time to first token, generation speed, and inspect raw provider responses.
- **Agent workflows:** Keep tool calling, Skills, MCP, and multi-turn conversations available.
- **Session metrics:** Track token usage, cache hit rate, conversation turns, and estimated value.
- **Cross-platform:** Run on macOS, Windows, and Linux.

## Quick Start

1. Build the desktop app for your platform.
2. Launch 青云currsor小助手, open **Model Settings**, and enter the endpoint, API key, and model ID.
3. Test the model configuration. Once it passes, return to the dashboard and start the service.
4. After upgrading Cursor or configuring a model for the first time, quit Cursor completely and restart it, then start a new conversation and select the configured model.

## Development

```bash
npm --prefix apps/desktop install
make check
make build-desktop
```

## License

This project is open source under the [MIT License](./LICENSE).
