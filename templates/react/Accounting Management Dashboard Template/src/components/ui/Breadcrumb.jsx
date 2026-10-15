import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Breadcrumb({ items }) {
  return (
    <div className="w-full bg-[#FFFFFF] px-20 py-3 border-b border-[#E5E7EB] flex items-center">
      <nav className="flex items-center text-[13px]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              {isLast ? (
                <span className="font-medium text-[#1E1E1E]">{item.label}</span>
              ) : (
                <>
                  <Link 
                    to={item.path} 
                    className="font-normal text-[#727272] hover:text-[#10677F] transition-colors"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2 text-[#C6C7C7]">›</span>
                </>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}