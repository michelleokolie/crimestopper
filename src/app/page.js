import Card from "../components/Card.js";


export default function Home() {
  return (
    <div>
      <div>
        <h1>See Something.</h1>
        <h1>Say Something.</h1>
      </div>
      <div>
        <span>Submit anonymous tips to help keep Winnipeg safe.</span>
      </div>
      <div>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}
