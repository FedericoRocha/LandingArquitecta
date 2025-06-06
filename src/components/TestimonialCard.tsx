import React from 'react';
import Card from './Card';

type TestimonialCardProps = {
  text: string;
  author: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author }) => (
  <Card className="bg-[#F4F4F5]">
    <p className="italic text-gray-900 mb-2">"{text}"</p>
    <span className="text-[#6B7280] text-sm font-sans">{author}</span>
  </Card>
);

export default TestimonialCard;
