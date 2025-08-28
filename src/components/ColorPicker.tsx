import { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = useCallback((event: any) => {
    setColor(event.target.value);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Màu người dùng chọn:</h2>
      <input type="color" onChange={handleChangeColor} />

      <p>Màu hiển thị:</p>
      <div
        style={{
          width: "150px",
          height: "80px",
          backgroundColor: color,
          border: "1px solid #000"
        }}
      />
    </div>
  );
}
