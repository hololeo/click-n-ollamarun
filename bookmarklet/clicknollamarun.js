javascript: (function () {
  var url = window.location.href,
    match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:huggingface\.co|hf\.co)\/([^\/]+)\/([^\/]+)/,
    );
  if (match) {
    var username = match[1],
      repository = match[2],
      newUrl = `ollama run hf.co/${username}/${repository}`,
      message =
        "Here's your Ollama run command:\nDefaults to Q4_K_M\nAppend:{quantization} for different quantization\nCopy and paste in terminal to pull and run model\nsee https://huggingface.co/docs/hub/en/ollama\n\nYou can modify the command below:",
      userInput = prompt(message, newUrl);
    userInput !== null &&
      navigator.clipboard.writeText(userInput).then(
        function () {
          alert("Command copied to clipboard!");
        },
        function () {
          alert(
            "Copying to clipboard failed. Please copy the command manually.",
          );
        },
      );
  } else alert("This bookmarklet only works on Hugging Face model pages.");
})();
// use with bookmarklet maker like https://caiorss.github.io/bookmarklet-maker/
