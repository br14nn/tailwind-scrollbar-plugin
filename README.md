# tailwindcss-scrollbar

This is a plugin for tailwind to customize your scrollbars thru classnames.

## Installation

1. In your terminal:
   ```
   npm i tailwind-scrollbar-plugin
   ```
2. Copy the text below and Locate a file in your project named `tailwind.config.js`

   ```
   require("tailwind-scrollbar-plugin")
   ```

3. Inside the file look for the plugins and paste it inside. Like this:

   ```
   plugins: [require("tailwind-scrollbar-plugin")]
   ```

4. Proceed on `How To Use` section.

## How To Use

1.  | Class | Description | Example |
    | --- | --- | --- |
    | `scrollbar:` | Use this as a selector to change the height and width of the scrollbar. (Try also properties) | `class="scrollbar:w-[10px]"` - Changes the width of the scrollbar <br/> `class="scrollbar:h-[10px]"` - Changes the height of the scrollbar |
    | `scrollbar-track:` | Use this as a selector to change the background color of the scrollbar track | `class="scrollbar-track:bg-red-400"` - Changes the background color of the scrollbar track to red |
    | `scrollbar-thumb:` | Use this as a selector to change the background color ofthe scrollbar thumb. You can also use this together with `hover:` selector in tailwind | `class="scrollbar-thumb:bg-red-400 hover:scrollbar-thumb:bg-red-500"` - When the scrollbar thumb is in hover the color will change to a slightly darker red and will return to its original color when not in hover. |
