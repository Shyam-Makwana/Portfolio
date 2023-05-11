import React from 'react';

const IconGmail = ({ url, pdb }) => (
    <a href={url} target="_blank" rel="noreferrer" style={{ paddingBottom: pdb }}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" style={{ fill: "#000000" }}>
            <g fill="#64ffda" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}>
                <g transform="scale(5.33333,5.33333)">
                    <path d="M45,16.2l-5,2.75l-5,4.75v16.3h7c1.657,0 3,-1.343 3,-3z"></path>
                    <path d="M3,16.2l3.614,1.71l6.386,5.79v16.3h-7c-1.657,0 -3,-1.343 -3,-3z"></path>
                    <path d="M35,11.2l-11,8.25l-11,-8.25l-1,5.8l1,6.7l11,8.25l11,-8.25l1,-6.7z"></path>
                    <path d="M3,12.298v3.902l10,7.5v-12.5l-3.124,-2.341c-0.744,-0.558 -1.648,-0.859 -2.578,-0.859v0c-2.374,0 -4.298,1.924 -4.298,4.298z"></path>
                    <path d="M45,12.298v3.902l-10,7.5v-12.5l3.124,-2.341c0.744,-0.558 1.648,-0.859 2.578,-0.859v0c2.374,0 4.298,1.924 4.298,4.298z"></path>
                </g>
            </g>
        </svg>
    </a>
);

export default IconGmail;