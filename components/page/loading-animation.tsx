import { FC } from "react";

export const LoadingAnimation: FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 bg-blue-500 rounded-full animate-pulse`}
            style={{
              top: index % 2 === 0 ? "0" : "50%",
              left: index < 2 ? "0" : "50%",
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);
