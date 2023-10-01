import React, { FC } from 'react';
import {cn} from "@/app/utils";

interface DialogHeaderPropsType extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string
  marginBottom?: string;
}

export const DialogHeader: FC<DialogHeaderPropsType> = ({
  title,
  className,
  marginBottom
}: DialogHeaderPropsType) => (
  <div className={`flex items-center justify-between mb-${marginBottom || '6'}`}>
    <h1 className={cn('font-semibold text-base text-4xl md:text-5xl lg:text-6x', className)}>
      {title}
    </h1>
  </div>
)

export default DialogHeader
