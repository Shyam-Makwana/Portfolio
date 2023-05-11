import React from 'react';

const IconMedal = ({ url, pdt, pdr }) => (
    <a href={url} target="_blank" rel="noreferrer" style={{ paddingTop: pdt, paddingRight: pdr }}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 30.696 30.696" style={{ fill: "#000000" }}>
            <g fill="#64ffda" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}>
            <path d="M15.999 13.531c-4.543 0-8.227 3.684-8.227 8.227s3.684 8.227 8.227 8.227c4.544 0 8.227-3.684 8.227-8.227s-3.683-8.227-8.227-8.227zM15.999 28.783c-3.844 0-6.961-3.117-6.961-6.963 0-3.844 3.117-6.96 6.961-6.96 3.846 0 6.961 3.116 6.961 6.96 0 3.846-3.115 6.963-6.961 6.963zM20.136 6.95l2.824-4.935h-13.922l2.867 4.935h8.231zM21.613 15.351l5.042-8.298-3.381-4.894-6.35 11.165c2.786 0.233 4.689 2.027 4.689 2.027zM15.053 13.262l-6.328-11.103-3.38 4.894 4.894 8.444c-0.001 0 1.776-1.832 4.814-2.235zM14.868 19.924c-0.383 0.299-0.736 0.5-1.062 0.607v1.131c0.619-0.203 1.157-0.518 1.613-0.945v4.711h1.25v-6.549h-1.014c-0.142 0.396-0.404 0.746-0.787 1.045z"></path>
            </g>
        </svg>
    </a>
);

export default IconMedal;