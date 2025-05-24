import { useState } from "react";

export const Code = () => {
  const [color, setColor] = useState(0);
  const [power, setPower] = useState(0);
  const [warp, setWarp] = useState(0);
  const [opPack, setOpPack] = useState(0);
  const basePrice = 1000;

  const total = color + power + warp + opPack + basePrice;

  console.log(total);

  return (
    <>
      <div className="Container">
        <center>
          <h3 id="heading">Spaceship Configurator</h3>
        </center>
        <hr />
        <h4>Select color :</h4>
        <div className="flex-container">
          <div onClick={() => setColor(0)}>
            <center>
              <div
                style={{
                  width: "64px",
                  height: "32px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              ></div>
              <br />
              <span>+0€</span>
              <br />
              <br />
              <span>snow</span>
            </center>{" "}
          </div>
          <div onClick={() => setColor(100)}>
            <center>
              <div
                style={{
                  width: "64px",
                  height: "32px",
                  backgroundColor: "#FA7A00",
                  borderRadius: "5px",
                }}
              ></div>
              <br />
              <span>+100€</span>
              <br />
              <br />
              <span>Volcano</span>
            </center>{" "}
          </div>
          <div onClick={() => setColor(100)}>
            <center>
              <div
                style={{
                  width: "64px",
                  height: "32px",
                  backgroundColor: "#6BE4FF",
                  borderRadius: "5px",
                }}
              ></div>
              <br />
              <span>+100€</span>
              <br />
              <br />
              <span>Sky</span>
            </center>{" "}
          </div>
          <div className="calc">
            <p>
              BasePrice : <span className="price">+{basePrice}€</span>
            </p>
            <p>
              {" "}
              Color : <span className="price">+{color}€</span>
            </p>
            <p>
              Power : <span className="price">+{power}€</span>
            </p>
            <p>
              Warp drive: <span className="price">+{warp}€</span>
            </p>
            <p>
              Option package : <span className="price">+{opPack}€</span>
            </p>
            <hr />
            <p style={{fontSize:'20px'}}>
              Total : <span className="price">+{total}€</span>
            </p>
          </div>
        </div>

        <br />
        <div id="power">
          <h4>Select power:</h4>
          <div className="flex-container1">
            <div onClick={() => setPower(0)}>
              <center>
                <span>100 MV</span> <br />
                <br />
                <span>+0€</span>
              </center>
            </div>
            <div onClick={() => setPower(200)}>
              <center>
                <span>15 MV</span> <br />
                <br />
                <span>+200€</span>
              </center>
            </div>
            <div onClick={() => setPower(500)}>
              <center>
                <span>200 MV</span> <br />
                <br />
                <span>+500€</span>
              </center>
            </div>
          </div>
        </div>
        <br />
        <h4>Warp Drive :</h4>
        <div className="flex-container2">
          <div onClick={() => setWarp(0)}>
            {" "}
            <center>
              <span>NO</span> <br />
              <br />
              <span>+0€</span>
            </center>
          </div>
          <div onClick={() => setWarp(1000)}>
            {" "}
            <center>
              <span>YES</span> <br />
              <br />
              <span>+1000€</span>
            </center>
          </div>
        </div>

        <h4>Select option package:</h4>
        <div className="flex-container3">
          <div>
            <center>
              <h3>Basic</h3>
              <br />
            </center>
            <ul>
              <li>Air Conditioning</li>
              <li>Cloth Seat</li>

              <li>FM Radio</li>
            </ul>
          </div>
          <div onClick={() => setOpPack(100)}>
            <center>
              <h3>Sport</h3>
              <span>+100€</span>
            </center>

            <ul>
              <li>Air Conditioning</li>
              <li>Cloth Seat</li>
              <li>FM Radio</li>
              <li>Personal tech support</li>
            </ul>
          </div>

          <div onClick={() => setOpPack(500)}>
            <center>
              <h3>Lux</h3>
              <span>+500€</span>
            </center>
            <ul>
              <li>Air conditioning</li>
              <li>Luxury seats</li>
              <li>Fm radio</li>
              <li>Chrome weels</li>
              <li>Window tint</li>
              <li>Subwoofer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
