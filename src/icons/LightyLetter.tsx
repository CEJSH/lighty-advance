export default function LightyLetter({
  width,
  height,
  color,
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <svg
      width={width ?? "91"}
      height={height ?? "32"}
      viewBox="0 0 91 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Lighty">
        <path
          id="Vector"
          d="M85.9586 8.35645H91.0001L81.8165 30.9749H77.0476L79.9362 23.8896L73.6412 8.35645H79.0097L82.4705 18.2214L85.9586 8.35645Z"
          fill={color ?? "#0A0A0A"}
          style={{ fill: color ?? "#0A0A0A", fillOpacity: 1 }}
        />
        <path
          id="Vector_2"
          d="M73.176 8.35694V12.5264H70.0149V24.3261H65.1643V12.5264H62.0032V8.35694H65.1643V3.61523H70.0149V8.35694H73.176Z"
          fill={color ?? "#0A0A0A"}
          style={{ fill: color ?? "#0A0A0A", fillOpacity: 1 }}
        />
        <path
          id="Vector_3"
          d="M45.3362 24.3261V1.43506H50.1868V9.99193C51.1406 8.71113 52.6122 7.97535 54.656 7.97535C58.3621 7.97535 60.8964 10.6732 60.8964 15.0879V24.3261H56.0458V15.9054C56.0458 13.4801 55.0648 12.1448 53.2389 12.1448C51.3314 12.1448 50.1868 13.6436 50.1868 16.1235V24.3261H45.3362Z"
          fill={color ?? "#0A0A0A"}
          style={{ fill: color ?? "#0A0A0A", fillOpacity: 1 }}
        />
        <path
          id="Vector_4"
          d="M33.9903 31.3561C29.2487 31.3561 26.6326 28.6583 26.1148 25.5789H31.02C31.2652 26.6144 32.1918 27.2685 33.9903 27.2685C36.0069 27.2685 37.3694 25.9604 37.3694 23.9711V22.2815C36.4157 23.5623 34.8896 24.2981 32.7913 24.2981C28.2131 24.2981 25.0248 20.8917 25.0248 16.2045C25.0248 11.4355 28.2131 7.97461 32.7913 7.97461C34.8896 7.97461 36.4157 8.71039 37.3694 9.9912V8.35613H42.2201V24.0256C42.2201 28.3585 38.7592 31.3561 33.9903 31.3561ZM33.5543 20.2922C35.9251 20.2922 37.4512 18.5753 37.4512 16.2045C37.4512 13.8336 35.9251 12.1168 33.5543 12.1168C31.238 12.1168 29.7664 13.8336 29.7664 16.2045C29.7664 18.5753 31.238 20.2922 33.5543 20.2922Z"
          fill={color ?? "#0A0A0A"}
          style={{ fill: color ?? "#0A0A0A", fillOpacity: 1 }}
        />
        <path
          id="Vector_5"
          d="M20.3233 0.644043C22.0401 0.644043 23.2936 1.8976 23.2936 3.61442C23.2936 5.33125 22.0401 6.58481 20.3233 6.58481C18.6064 6.58481 17.3529 5.33125 17.3529 3.61442C17.3529 1.8976 18.6064 0.644043 20.3233 0.644043ZM22.7486 8.35613V24.3798H17.8979V8.35613H22.7486Z"
          fill={color ?? "#0A0A0A"}
          style={{ fill: color ?? "#0A0A0A", fillOpacity: 1 }}
        />
        <path
          id="Vector_6"
          d="M0.0303955 2.11621H4.99006V19.9385H16.0812V24.3259H0.0303955V2.11621Z"
          fill={color ?? "#0A0A0A"}
          style={{ fill: color ?? "#0A0A0A", fillOpacity: 1 }}
        />
      </g>
    </svg>
  );
}
