import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { tokyonight } from "./utils/themes";
import { useCallback, useState } from "react"

function App() {
  const [msg, setMsg] = useState("")
  const [messages, setMessages] = useState<{ text: string }[]>([])

  const handleSubmit = useCallback(() => {
    setMessages([...messages, { text: msg }])
    setMsg("")
  }, [msg])


  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      {
        messages.length <= 0 &&
        <box justifyContent="center" alignItems="flex-end" flexGrow={1}>
          <ascii-font font="tiny" text="quasar" color={tokyonight.green} />
        </box>
      }
      <box style={{ width: "100%", flexGrow: 1, padding: 1 }} >
        {messages.map((msg) => (<text width={"100%"} padding={0.5}>{msg.text}</text>))}
      </box>
      <box style={{ border: true, borderStyle: "rounded", borderColor: tokyonight.blue, width: "100%", minHeight: 3, position: "absolute", bottom: 2 }}>
        <input
          paddingX={1}
          placeholder="Ask me anything"
          focused
          value={msg}
          onInput={setMsg}
          onSubmit={handleSubmit}
        />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
