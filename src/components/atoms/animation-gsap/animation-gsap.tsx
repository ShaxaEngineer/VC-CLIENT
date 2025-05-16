import { FC, useEffect } from 'react';

import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { idCreate } from '@/utils';

interface AnimationGsapProps {
  children: React.ReactNode;
  className?: string;
}

// GSAP ScrollTrigger ni ro'yxatdan o'tkazish
gsap.registerPlugin(ScrollTrigger);

export const AnimationGsap: FC<AnimationGsapProps> = ({ children, className }) => {
  const getId = idCreate();

  useEffect(() => {
    const element = document.querySelector(`#${getId}`);
    if (!element) return;
    // Elementni boshlang'ich holatga o'rnatish (CSS bilan ham qilinishi mumkin)
    gsap.set(element, { opacity: 0.8, duration: 0.2, translateY: 40 });
    // ScrollTrigger animatsiyasi
    const animation = gsap.to(element, {
      translateY: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: element,
        start: 'bottom 120%', // Elementning tepasi sahifa ko'rinadigan qismning 100% joyida boshlanadi
        end: 'top 60%', // Elementning tepasi sahifa ko'rinadigan qismning 50% joyida tugaydi
        scrub: true,
        // markers: true, // Debugging uchun faqat kerak bo'lganda ishlatilsin
      },
    });
    // Tozalash
    return () => {
      animation.kill(); // Animatsiyani to'xtatish
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id={getId} className={clsx(className)}>
      {children}
    </div>
  );
};
