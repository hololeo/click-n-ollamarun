

# Click 'n' Ollama Run 

<img src="https://github.com/user-attachments/assets/f6b2f246-7e76-4bfd-928a-84b3edc7cad6" width="150">

## Description

Click-n-Ollama Run is a handy bookmarklet that converts Hugging Face model URLs into Ollama run commands with a single click. It simplifies the process of running Hugging Face models locally using Ollama, saving you time and reducing the chance of errors in command construction. Inspired by https://huggingface.co/docs/hub/en/ollama

<img src="https://github.com/user-attachments/assets/adbe1024-0236-4d12-9e7f-b4574ca61cc1" width="300">




If this work has been helpful to you, you can support it for free by clicking ⭐ to star this repository!

## Installation

1. Create a new bookmark in your browser.
2. Name the bookmark "Click-n-OllamaRun" (or any name you prefer).
3. In the URL or location field of the bookmark, paste the following code:

```javascript
javascript: (function() {
    var url = window.location.href,
        match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:huggingface\.co|hf\.co)\/([^\/]+)\/([^\/]+)/);
    if (match) {
        var username = match[1],
            repository = match[2],
            newUrl = `ollama run hf.co/${username}/${repository}`,
            message = 'Here\'s your Ollama run command:\nDefaults to Q4_K_M\nAppend:{quantization} for different quantization\nCopy and paste in terminal to pull and run model\nsee https://huggingface.co/docs/hub/en/ollama\n\nYou can modify the command below:',
            userInput = prompt(message, newUrl);
        userInput !== null && navigator.clipboard.writeText(userInput).then(function() {
            alert('Command copied to clipboard!')
        }, function() {
            alert('Copying to clipboard failed. Please copy the command manually.')
        })
    } else alert('This bookmarklet only works on Hugging Face model pages.')
})();
// use with bookmarklet maker like https://caiorss.github.io/bookmarklet-maker/
```

4. Save the bookmark.

## Usage

1. Navigate to a Hugging Face model page (e.g., https://huggingface.co/username/model-name).
2. Click the "Click-n-OllamaRun" bookmark in your browser.
3. A prompt will appear with the Ollama run command. You can modify it if needed.
4. Click OK to copy the command to your clipboard.
5. Paste the command into your terminal to run the model with Ollama.

## Examples

### Example 1: Basic Usage

1. Visit: https://huggingface.co/bartowski/MathCoder2-CodeLlama-7B-GGUF
2. Click the "Click-n-OllamaRun" bookmark.
3. You'll see a prompt with:
   ```
   ollama run hf.co/bartowski/MathCoder2-CodeLlama-7B-GGUF
   ```
4. Click OK to copy the command.

### Example 2: Modifying Quantization

1. Visit: https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF
2. Click the "Click-n-OllamaRun" bookmark.
3. In the prompt, modify the command to specify a different quantization:
   ```
   ollama run hf.co/TheBloke/Llama-2-7B-Chat-GGUF:Q5_K_M
   ```
4. Click OK to copy the modified command.
5. Paste in terminal. It will pull and run the model in Ollama

## Note

This bookmarklet works with both `huggingface.co` and `hf.co` URLs. Ensure you're on a valid Hugging Face model page when using it.

For more information on using Hugging Face models with Ollama, visit: https://huggingface.co/docs/hub/en/ollama

### NotebookLLm podcast on this readme

https://github.com/user-attachments/assets/6ede7d6e-acbb-48d7-9cab-63cf8883b23f


