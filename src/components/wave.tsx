"use client"

import "./wave.css";
import {useEffect, useState} from "react";
import Image from "next/image";

export default function Wave() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoading(false);
        }
    }, [])

    return (
        <>
            <Image
                className={`${isLoading ? 'opacity-0' : 'opacity-75'} z-10 transition-all duration-300 absolute sm:-left-24 sm:-bottom-24 -left-12 -bottom-12 vertical-wave w-44 sm:w-96`}
                src="/cute-cat.png" alt="a cute cat"
                width={500} height={500}/>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100%"
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMax slice"
                className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-all duration-300 h-1/2 z-0`}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <defs>
                    <linearGradient id="bg">
                        <stop offset="20%" style={{stopColor: "rgba(255, 0, 132, 0.07)"}}/>
                        <stop offset="50%" style={{stopColor: "rgba(58, 12, 163, 0.7)"}}/>
                        <stop offset="80%" style={{stopColor: "rgba(0, 255, 255, 0.3)"}}/>
                    </linearGradient>
                    <path
                        id="wave"
                        fill="url(#bg)"
                        d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                    />
                </defs>
                <g>
                    <use xlinkHref="#wave" opacity=".3">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="10s"
                            calcMode="spline"
                            values="270 230; -334 180; 270 230"
                            keyTimes="0; .5; 1"
                            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                            repeatCount="indefinite"
                        />
                    </use>
                    <use xlinkHref="#wave" opacity=".6">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="8s"
                            calcMode="spline"
                            values="-270 230;243 220;-270 230"
                            keyTimes="0; .6; 1"
                            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                            repeatCount="indefinite"
                        />
                    </use>
                    <use xlinkHref="#wave" opacity=".9">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="6s"
                            calcMode="spline"
                            values="0 230;-140 200;0 230"
                            keyTimes="0; .4; 1"
                            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                            repeatCount="indefinite"
                        />
                    </use>
                </g>
            </svg>

        </>
    )
}