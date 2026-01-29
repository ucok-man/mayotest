"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import Icons from "~/components/common/icons";
import { cn } from "~/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "py-3 px-4 last:mb-0 rounded-2xl transition-all duration-200 data-[state=open]:bg-primary-20 space-y-3 data-[state=open]:mb-3 duration-75",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start h-full justify-between gap-4 rounded-md text-left data-[state=open]:text-primary font-chillax-link-normal-mobile outline-none disabled:pointer-events-none disabled:opacity-50 transition-all duration-75",
          className,
        )}
        {...props}
      >
        {children}

        <div className="relative ml-5">
          <Icons.plus className="absolute top-0 right-0 pointer-events-none size-5.5 fill-dark shrink-0 -translate-y-0.5 opacity-100 group-data-[state=open]:opacity-0" />

          <Icons.minus className="absolute top-0 right-0 pointer-events-none size-5.5 fill-primary shrink-0 -translate-y-0.5 opacity-0 group-data-[state=open]:opacity-100" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn("pt-2", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
