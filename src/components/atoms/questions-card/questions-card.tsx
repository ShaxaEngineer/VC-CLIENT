import { FC, useState } from 'react';

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import AnimateHeight from 'react-animate-height';

import { AnimationGsap } from '@/components';

interface IQuestionsCard {
  question: string;
  answer: string;
}

export const QuestionsCard: FC<IQuestionsCard> = ({ question, answer }) => {
  const [height, setHeight] = useState<'auto' | number>(0);

  return (
    <AnimationGsap className="bg-extra-blue rounded-2xl px-6 py-4 max-md:px-3 max-md:py-3">
      <button
        onClick={() => setHeight(height === 0 ? 'auto' : 0)}
        className="flex w-full cursor-pointer items-start justify-between gap-3 text-base text-white max-md:text-sm"
      >
        <span className="text-start">{question}</span>
        <span>{height === 0 ? <PlusOutlined /> : <MinusOutlined />}</span>
      </button>
      <AnimateHeight
        duration={500}
        height={height} // see props documentation below
      >
        <p className="relative mt-3 text-sm text-white/50 max-md:text-xs">{answer}</p>
      </AnimateHeight>
    </AnimationGsap>
  );
};
