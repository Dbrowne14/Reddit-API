import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type textProps = {
    title: string;
    text: string;
}

export const SideAccordion = ({title, text}: textProps) => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="pl-2">
      <AccordionItem value="item-1" >
        <AccordionTrigger className="explainersStyles">{title}</AccordionTrigger>
        <AccordionContent className="explainersStyles text-start">{text}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
