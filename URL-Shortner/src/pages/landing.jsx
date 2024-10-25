import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [longUrl, setLongUrl] = React.useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if(longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        <h2>The only URL Shortner you'll ever need!</h2>
      </div>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your loooong url!!"
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button 
        className="h-full" type="submit" variant="destructive">
          Shorten!
        </Button>
      </form>
      <img
        src="/banner.jpeg"
        className="w-full my-11 md:px-11"
        alt="Banner Img"
      />
      <Accordion type="multiple" collapsible className="w-full my-11 md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does Trimrr URL shortner works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long url, our system genrates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. you need to have an account to use this app.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the no. of clicks, geolocation data of the clicks and
            dvice type like mobile or desktop for each of your shortened URL.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Landing;
