'use client'

import React from 'react';
import Image from 'next/image';
import { MotionsImports } from '../components/Motion-Imports';
import * as logoIcons from '@/assets/logoIcons/@index';

type LogoIconsType = typeof logoIcons;

export default function TechnoLogoList() {
  const orderedLogoIcons = [
    'html',
    'cssIcon',
    'javascript',
    'typescript',
    'python',
    'reactIcon',
    'tailwind',
    'saas',
    'mongodb',
    'postgresLogo',
    'mysql',
    'prismaLogo',
    'docker',
    'kubernets',
    'visualcode',
    'eclipseIcon',
    'postman',
    'insomnia',
    'nestjs',
    'nodejs',
    'kafka',
    'github',
    'figma',
    'firebase',
    'expo',
    'salesforce',
    'aws',
    'bash',
    'discord',
    'express',
    'fastify',
    'vite',
    'nextLogo',
  ];

  return (
    <div className="mx-auto container max-w-3xl mt-16 px-6 py-8">
    <div>
      <MotionsImports.ul className="container grid grid-cols-4 lg:grid-cols-5 gap-2">
        {orderedLogoIcons.map((key) => (
          <li key={key} className='techno-logo '>
            <Image src={logoIcons[key as keyof LogoIconsType]} alt={key} />
          </li>
        ))}
      </MotionsImports.ul>
    </div>
  </div>
  );
}