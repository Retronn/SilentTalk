import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Divider} from "@nextui-org/divider";
import {Switch} from "@nextui-org/switch";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import LightbulbAnimation from "@/components/controls/lightbulb";
import { useState } from "react";
import FanAnimation from "@/components/controls/fan";
import LockAnimation from "@/components/controls/lock";
import {Snippet} from "@nextui-org/snippet";
export default function IndexPage() {

  const [isLightBulbOn, setIsLightBulbOn] = useState(false);
  const [isFanOn, setIsFanOn] = useState(false);
  const [isLockOn, setIsLockOn] = useState(false);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl shadow-2xl text-center justify-center">

          <span className={`${title()} `}>
            Sign-Driven Smart Home Experience
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Effortless, precise, and innovative smart home control.
          </div>
        </div>

        <div className="flex gap-3">

          <img src="./halftonePalm.png" className="absolute top-0 left-0 z-[-1] opacity-30 h-[30rem]"/>
          <img src="./halftonePalm2.png" className="absolute top-28 right-0 z-[-1] opacity-30 h-[30rem]"/>
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/"
          >
            Try Now!
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      
      </section>
      
      
      <section className="mt-52 drop-shadow-glow">
      
          <div className="flex w-full px-32"> 
            
            
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none bg-center w-full h-[32rem] bg-cover bg-[url('./okGesture.png')]"
                
              > 

              <div className="py-8 px-12 h-full w-full flex flex-col gap-12">
                <h2 className="bg-[#e0714d]/85 shadow-lg rotate-1 p-4 text-[#edeadd] drop-shadow-md text-4xl text-left font-semibold  ">Welcome to the Future of Accessible Living</h2>
                <p className="bg-[#edeadd]/85 shadow-lg font-medium px-4 py-8 -rotate-1 text-[#664229] text-xl">With our advanced ASL-powered smart home interface, control your environment effortlessly. Whether it’s turning on the lights, adjusting the temperature, or more, we bring the power of home automation to your fingertips—literally.</p>
              </div>

              

                
              </Card>
            
          
          </div>
      </section>

      <section aria-label="Try it Section" className="mt-52">
          <div className="w-full px-32 flex flex-col gap-10 justify-center items-center">
            <div>
              <h2 className="shadow-lg text-center p-4  text-[#edeadd] drop-shadow-glow text-4xl font-semibold">Do not believe? Check it right now!</h2>
              <p className="text-center drop-shadow-glow">Try turning the lights on and off or locking the door with your gestures.</p>
            </div>
            <Card
             
              radius="lg"
              className="w-[60%] drop-shadow-glow"
              
            >
              <div className="bg-black">
                <Image
                  alt="Woman listing to music"
                  className="object-cover aspect-video"
                  src="./cameraUser.png"
                
                  width="100%"
                />
              </div>
              <CardFooter className="justify-center gap-4 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
                <p className="text-sm font-bold drop-shadow-lg text-primary">Turn on your camera.</p>
                <Switch defaultSelected aria-label="Turn On camera"/>
              </CardFooter>
            </Card>

            <Snippet hideCopyButton color="success">Smart Command: [LightsON] Success</Snippet>

            <div className="w-full flex gap-12 justify-center">
              <Button className="w-1/4 h-60 p-0 bg-neutral-950 border" onClick={()=>setIsLightBulbOn(!isLightBulbOn)}>
                <LightbulbAnimation isOn={isLightBulbOn}/>
                <div className="absolute rounded-full bg-yellow-300 hidden w-10 h-10 drop-shadow-glow-md"/>
              </Button>

              <Button className="w-1/4 h-60 p-0 bg-neutral-950 border" onClick={()=>setIsFanOn(!isFanOn)}>
                <FanAnimation isOn={isFanOn}/>
                <div className="absolute rounded-full bg-yellow-300 hidden w-10 h-10 drop-shadow-glow-md"/>
              </Button>

              <Button className="w-1/4 h-60 p-0 bg-neutral-950 border" onClick={()=>setIsLockOn(!isLockOn)}>
                <LockAnimation isOn={isLockOn}/>
                <div className="absolute rounded-full bg-yellow-300 hidden w-10 h-10 drop-shadow-glow-md"/>
              </Button>
            </div>

          </div>
      </section >


      <section className="mt-44">
        <div className="w-full px-32 flex flex-col gap-10 justify-center items-center">
              <div>
                <h2 className="shadow-lg text-center p-4  text-[#e0714d] drop-shadow-glow text-4xl font-semibold">How does this work?</h2>
                <p className="text-center drop-shadow-glow">Control Your Smart Home Using ASL Gestures.</p>
              </div>

              <div className="w-full flex flex-col gap-6">
                <Card className="h-48 w-full">
                  <CardBody className="h-full flex gap-5  items-center flex-row w-full drop-shadow-glow">

                    <div className="w-40">
                    <Image 
                      src="./howWorks1.png" 
                      className="h-40 w-40"
                    />
                    </div>
                    <p className="absolute top-6 py-1 px-2 font-bold left-6 bg-[#e0714d]/85 text-[#edeadd] z-10 text-3xl rotate-12">1</p>

                    <div className="w-[26rem] h-full p-2 flex flex-col gap-3">
                          <h1 className="font-bold text-2xl">Accurate Palm Detection</h1>
                          <p>Our system starts by recognizing the position and orientation of your palm, ensuring accurate hand tracking from the very beginning.</p>
                    </div>

                  </CardBody>
                </Card>

                <Card className="h-48 w-full">
                  <CardBody className="h-full flex gap-5  items-center flex-row w-full drop-shadow-glow">

                    <div className="w-40">
                    <Image 
                      src="./howWorks2.png" 
                      className="h-40 w-40"
                    />
                    </div>
                    <p className="absolute top-6 py-1 px-2 font-bold left-6 bg-[#edeadd]/85 text-[#e0714d] z-10 text-3xl -rotate-3">2</p>

                    <div className="w-[26rem] h-full p-2 flex flex-col gap-3">
                          <h1 className="font-bold text-2xl">Letter Prediction</h1>
                          <p>Once your palm is detected, using a combination of machine learning models, our AI analyzes each finger’s position to predict individual letters. </p>
                    </div>

                  </CardBody>
                </Card>

                <Card className="h-48 w-full">
                  <CardBody className="h-full flex gap-5  items-center flex-row w-full drop-shadow-glow">

                    <div className="w-40">
                    <Image 
                      src="./howWorks3.png" 
                      className="h-40 w-40"
                    />
                    </div>
                    <p className="absolute top-6 py-1 px-2 font-bold left-6 bg-[#e0714d]/85 text-[#edeadd] z-10 text-3xl rotate-6">3</p>

                    <div className="w-[26rem] h-full p-2 flex flex-col gap-3">
                          <h1 className="font-bold text-2xl">Command Prediction</h1>
                          <p>After letters are detected, our system intelligently predicts entire words, speeding up the interaction process. </p>
                    </div>

                  </CardBody>
                </Card>
              </div>
        </div>
      </section>


      <section className="mt-20 p-32">
        <div className="w-full flex flex-col gap-8">
              <div>
                <h2 className="shadow-lg text-center p-4  text-[#e0714d] drop-shadow-glow text-4xl font-semibold">How was it developed?</h2>
                <p className="text-center drop-shadow-glow">Here are the main languages, libraries, and frameworks that were used:</p>
              </div>
            <Image
            src="./technology.png"
            className="drop-shadow-glow"
            />
        </div>
      </section>

    </DefaultLayout>
  );
}
