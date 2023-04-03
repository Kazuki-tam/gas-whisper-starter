# gas-whisper-starter

`gas-whisper-starter` is a starter kit to use Whisper in Google Apps Script. The `WHISPER` function provided by this kit can convert an audio file's URL into text on Google Sheets.

Note: You need to set the OpenAI API key into script properties.

[👉 Check out how to add script properties.](https://developers.google.com/apps-script/guides/properties#manage_script_properties_manually)

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/gas-whisper-starter)](https://github.com/Kazuki-tam/gas-whisper-starter/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/gas-whisper-starter)](https://github.com/Kazuki-tam/gas-whisper-starter/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/gas-whisper-starter)

## Features
- Just deploy this project code without development
- Develop locally with TypeScript, Clasp and Deno
- Bundle your files with esbuild

## Main dependencies

- [Google Apps Script](https://workspace.google.co.jp/intl/en/products/apps-script/)
- [Whisper API](https://platform.openai.com/docs/api-reference/audio)
- [Clasp](https://github.com/google/clasp)
- [esbuild](https://esbuild.github.io/)

## Prerequisites

- [Google Workspace](https://workspace.google.co.jp/)
- [OpenAI account](https://openai.com/api/)
- [Deno v1.29.4 or higher](https://deno.land/)

[🦕 How to install Deno](https://deno.land/manual@v1.29.4/getting_started/installation)

## How to use

Creating a repository from this template and cloning the repository.

### Login google account

```shell
deno task login
```

### Connect to your existing project

Create a `.clasp.json` at the root, and then add these settings.
Open the app script from your spreadsheet and check out your script id on the setting page.

```json
{
  "scriptId": "<SCRIPT_ID>",
  "rootDir": "./dist"
}
```

### Set OpenAI API key into script properties
1. Create a new secret key from [OpenAI API keys](https://beta.openai.com/account/api-keys).
2. Set the API key into script properties in your Apps Script project.

Note: The key name is must be `OPENAI_API_KEY`.

![Script Properties](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/del73wuy6tlz9k3h8l3s.png)

[📖 How to add script properties](https://developers.google.com/apps-script/guides/properties#manage_script_properties_manually)

### Upload a script project

Deploy your code to the existing project.

```shell
deno task deploy
```

### WHISPER function
1. Authorize this project's script by execution
2. Use `=WHISPER()` in your Google Workspace

You can add a system message with the second argument.

```
WHISPER(URL)

// Example 1 on Google Sheets
=WHISPER("https://drive.google.com/file/d/xxxxxxxxxxxxx/view")

// Example 2 on Google Sheets
=WHISPER(A1)
```

#### WHISPER Parameter
URL: The audio file's url

Please make sure that your audio file is set to public sharing if you upload it.

## Available Commands

Build your project.

```shell
deno task build
```

Build your project files and force writes all local files to script.google.com.

```shell
deno task deploy
```

Open the current directory's clasp project on script.google.com.

```shell
deno task open
```

## Create transcription with Whisper
You can easily convert audio into text using the WHISPER function.
The function uses Whisper model.

The following input file types are supported: mp3, mp4, mpeg, mpga, m4a, wav, and webm.

[📖 Learn more API reference](https://platform.openai.com/docs/api-reference/audio)

## License
MIT
