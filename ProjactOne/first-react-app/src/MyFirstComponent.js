import "./FirstComonentStyle.css";
export default function MyFirstComponent() {
  const x = 10;

  const person = {
    name: "Siraj",
    email: "solykihg@gmail.com",
  };

  const elmStyle = {
    color: "red",
    backgroundColor: "blue",
  };

  return (
    <div>
      <div>
        <h1 style={{ color: "red", backgroundColor: "blue" }}>
          {" "}
          {sayHello()}Siraj Word
        </h1>
        {/* يمكن استخدام الجافا سكريبت داخل الكود هنا ومثله من خلال 
        فقط استخدام الاقواس البرمجية
         */}

        <h2 style={elmStyle}>{x}hi in siraj word </h2>
        <button onClick={sayHello}>Click Me</button>
        <h3 className={"solo"}>{person.name}</h3>

        <h1 className={person.name == "Siraj" ? "solo" : "one"}>Check Name</h1>
      </div>

      <div></div>
    </div>
  );
}

function sayHello() {
  // alert("Hello");
}
