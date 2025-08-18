import { Score } from "react-vexflow";

export default function Music() {
  return (
    <main style={{ height: "100vh" }}>
      <h1>Music here</h1>
      <Score staves={[[["d4#", 1]]]} />
    </main>
  );
}
