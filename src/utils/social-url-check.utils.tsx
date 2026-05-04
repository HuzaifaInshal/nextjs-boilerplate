"use client";
import React from "react";
import { FaKeybase, FaPatreon, FaSoundcloud, FaVk } from "react-icons/fa";
import {
  SiDevdotto,
  SiExercism,
  SiLemmy,
  SiLinktree,
  SiMastodon,
  SiSubstack,
} from "react-icons/si";

// Custom SVG icons with brand colors
const SocialIcons = {
  Facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
        x1="9.993"
        x2="40.615"
        y1="9.993"
        y2="40.615"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2aa4f4"></stop>
        <stop offset="1" stopColor="#007ad9"></stop>
      </linearGradient>
      <path
        fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
      ></path>
      <path
        fill="#fff"
        d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
      ></path>
    </svg>
  ),

  Twitter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1"
        x1="4.338"
        x2="38.984"
        y1="-10.056"
        y2="49.954"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4b4b4b"></stop>
        <stop offset=".247" stopColor="#3e3e3e"></stop>
        <stop offset=".686" stopColor="#2b2b2b"></stop>
        <stop offset="1" stopColor="#252525"></stop>
      </linearGradient>
      <path
        fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)"
        d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
      ></path>
      <path
        fill="#fff"
        d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
      ></path>
      <polygon
        fill="#fff"
        points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
      ></polygon>
      <polygon
        fill="#fff"
        points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
      ></polygon>
    </svg>
  ),

  Instagram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
        cx="19.38"
        cy="42.035"
        r="44.899"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fd5"></stop>
        <stop offset=".328" stopColor="#ff543f"></stop>
        <stop offset=".348" stopColor="#fc5245"></stop>
        <stop offset=".504" stopColor="#e64771"></stop>
        <stop offset=".643" stopColor="#d53e91"></stop>
        <stop offset=".761" stopColor="#cc39a4"></stop>
        <stop offset=".841" stopColor="#c837ab"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
        cx="11.786"
        cy="5.54"
        r="29.813"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4168c9"></stop>
        <stop offset=".999" stopColor="#4168c9" stop-opacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <path
        fill="#fff"
        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
      ></path>
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
      <path
        fill="#fff"
        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
      ></path>
    </svg>
  ),

  LinkedIn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#0078d4"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
      ></path>
      <path
        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
        opacity=".05"
      ></path>
      <path
        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
      ></path>
    </svg>
  ),

  GitHub: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 50 50"
    >
      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
    </svg>
  ),

  YouTube: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#FF3D00"
        d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
      ></path>
      <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
    </svg>
  ),

  TikTok: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 50 50"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
    </svg>
  ),

  Spotify: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#8bc34a"
        d="M24.001,4c-11.077,0-20,8.923-20,20s8.923,20,20,20c11.076,0,20-8.923,20-20S35.077,4,24.001,4z"
      ></path>
      <path
        fill="#fff"
        d="M31.747,33.915c-0.292,0-0.585-0.145-0.877-0.292c-2.777-1.607-6.139-2.484-9.792-2.484c-2.047,0-4.093,0.291-5.993,0.73c-0.292,0-0.731,0.146-0.877,0.146c-0.731,0-1.169-0.586-1.169-1.17c0-0.73,0.438-1.17,1.023-1.314c2.338-0.586,4.677-0.877,7.161-0.877c4.093,0,7.893,1.021,11.108,2.924c0.438,0.291,0.731,0.584,0.731,1.314C32.916,33.478,32.331,33.915,31.747,33.915z M33.793,28.945c-0.438,0-0.73-0.144-1.023-0.291c-3.068-1.9-7.308-3.071-12.13-3.071c-2.339,0-4.531,0.293-6.139,0.733c-0.439,0.144-0.585,0.144-0.877,0.144c-0.877,0-1.462-0.73-1.462-1.461c0-0.877,0.439-1.316,1.169-1.607c2.192-0.584,4.385-1.023,7.454-1.023c4.97,0,9.793,1.17,13.593,3.507c0.584,0.291,0.877,0.877,0.877,1.461C35.255,28.215,34.67,28.945,33.793,28.945z M36.132,23.101c-0.438,0-0.585-0.146-1.023-0.291c-3.508-2.047-8.769-3.217-13.885-3.217c-2.631,0-5.262,0.293-7.6,0.877c-0.293,0-0.585,0.146-1.023,0.146c-1.023,0.146-1.754-0.73-1.754-1.754c0-1.023,0.585-1.607,1.315-1.754c2.777-0.877,5.7-1.17,9.062-1.17c5.554,0,11.4,1.17,15.785,3.654c0.584,0.293,1.022,0.877,1.022,1.754C37.886,22.369,37.154,23.101,36.132,23.101z"
      ></path>
    </svg>
  ),

  Pinterest: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="20" fill="#E60023"></circle>
      <path
        fill="#FFF"
        d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"
      ></path>
    </svg>
  ),

  Medium: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 72 72"
    >
      <path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58H26.951C14.94,58,14,57.06,14,45.049V26.951	C14,14.94,14.94,14,26.951,14H45.049z M29.713,44.151c4.502,0,8.151-3.649,8.151-8.151c0-4.502-3.649-8.151-8.151-8.151	c-4.502,0-8.151,3.649-8.151,8.151C21.562,40.502,25.212,44.151,29.713,44.151z M42.713,43.757c2.228,0,4.034-3.473,4.034-7.757	c0-4.284-1.806-7.757-4.034-7.757c-2.228,0-4.034,3.473-4.034,7.757C38.679,40.284,40.485,43.757,42.713,43.757z M48.98,42.928	c0.775,0,1.403-3.102,1.403-6.928s-0.628-6.928-1.403-6.928c-0.775,0-1.403,3.102-1.403,6.928S48.205,42.928,48.98,42.928z"></path>
    </svg>
  ),

  Twitch: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#FFF"
        d="M12 32L12 8 39 8 39 26 33 32 24 32 18 38 18 32z"
      ></path>
      <path
        fill="#8E24AA"
        d="M9,5l-3,7.123V38h9v5h5l5-5h7l10-10V5H9z M38,26l-5,5h-9l-5,5v-5h-6V9h25V26z"
      ></path>
      <path fill="#8E24AA" d="M32 25h-5V15h5V25zM24 25h-5V15h5V25z"></path>
    </svg>
  ),

  Dribbble: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="19.375" fill="#ed3675"></circle>
      <path
        fill="#bd1949"
        fill-rule="evenodd"
        d="M24,4C12.959,4,4,12.959,4,24c0,11.041,8.959,20,20,20	c11.02,0,20-8.959,20-20C44,12.959,35.02,4,24,4z M37.21,13.219c2.386,2.907,3.818,6.616,3.861,10.629	c-0.564-0.108-6.204-1.258-11.887-0.542c-0.13-0.282-0.239-0.586-0.369-0.889c-0.347-0.824-0.738-1.67-1.128-2.473	C33.978,17.384,36.842,13.696,37.21,13.219z M24,6.95c4.338,0,8.308,1.627,11.323,4.295c-0.304,0.434-2.885,3.883-8.959,6.16	c-2.798-5.141-5.9-9.349-6.377-10C21.267,7.102,22.612,6.95,24,6.95z M16.733,8.555c0.455,0.607,3.492,4.837,6.334,9.87	c-7.983,2.126-15.033,2.083-15.792,2.083C8.382,15.215,11.961,10.811,16.733,8.555z M6.907,24.022c0-0.174,0-0.347,0-0.521	c0.738,0.022,9.024,0.13,17.549-2.43c0.499,0.954,0.954,1.931,1.388,2.907c-0.217,0.065-0.456,0.13-0.672,0.195	c-8.807,2.842-13.492,10.607-13.883,11.258C8.577,32.417,6.907,28.403,6.907,24.022z M24,41.093c-3.948,0-7.592-1.345-10.477-3.601	c0.304-0.629,3.774-7.31,13.406-10.672c0.043-0.022,0.065-0.022,0.109-0.043c2.408,6.226,3.384,11.453,3.644,12.95	C28.62,40.616,26.364,41.093,24,41.093z M33.523,38.165c-0.174-1.041-1.085-6.03-3.319-12.169	c5.358-0.846,10.043,0.542,10.629,0.738C40.096,31.484,37.362,35.583,33.523,38.165z"
        clip-rule="evenodd"
      ></path>
    </svg>
  ),

  Behance: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#2196F3"
        d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"
      ></path>
      <path
        fill="#FFF"
        d="M27 17H34V19H27zM21.512 23.428c.585-.285 1.903-.934 1.903-2.857 0-3.617-3.952-3.57-4.683-3.57H12v14h7.025C19.61 31 24 30.835 24 26.999 24 24.524 22.39 23.714 21.512 23.428zM15 19.428h2.928c.292 0 2.195.104 2.195 1.572 0 1.467-1.463 1.714-1.902 1.714H15V19.428zM18.336 28.571h-3.367v-3.856h3.367c.731 0 2.341.237 2.341 2C20.677 28.476 18.628 28.571 18.336 28.571zM32.438 28.395c-.465.289-.929.436-1.549.436-2.326 0-2.789-1.961-2.789-2.83H36c0-.869 0-1.511-.155-2.236C35.689 23.04 34.63 20 30.734 20 25.289 20 25 24.778 25 25.5c0 .723.156 1.593.467 2.171.309.724.619 1.304 1.084 1.736.464.435 1.083.866 1.703 1.157C29.028 30.855 29.803 31 30.578 31c1.238 0 2.324-.288 3.253-.868.931-.579 1.55-1.448 2.014-2.606h-2.633C33.057 27.816 32.902 28.104 32.438 28.395zM30.734 22.027c1.518 0 2.168 1.592 2.322 2.314H28.1C28.1 24.198 28.471 22.027 30.734 22.027z"
      ></path>
    </svg>
  ),
  Tinder: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <radialGradient
        id="Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1"
        cx="24.39"
        cy="40.173"
        r="38.605"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fe7356"></stop>
        <stop offset="1" stopColor="#fd297c"></stop>
      </radialGradient>
      <path
        fill="url(#Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1)"
        d="M17.2,20.187c7.65-2.429,8.864-9.471,7.893-15.786c0,0,0-0.364,0.243-0.243	C32.743,7.802,41,15.452,41,27.23c0,8.743-6.921,16.636-17,16.636c-10.929,0-17-7.65-17-16.757c0-5.464,3.643-10.929,7.893-13.357	c0,0,0.364,0,0.364,0.243c0,1.214,0.486,4.25,1.821,6.071L17.2,20.187z"
      ></path>
    </svg>
  ),
  Reddit: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#64717c"
        d="M24,18c-0.552,0-1-0.448-1-1c0-2.815,0.36-12,5-12c1.173,0,2.037,0.676,2.872,1.331	C31.919,7.151,33.002,8,35,8h4c0.552,0,1,0.448,1,1s-0.448,1-1,1h-4c-2.688,0-4.233-1.211-5.362-2.095C28.922,7.344,28.46,7,28,7	c-1.738,0-3,4.206-3,10C25,17.552,24.552,18,24,18z"
      ></path>
      <radialGradient
        id="PTH08zocUYAZh7xvCE~aha_h3FOPWMfgNnV_gr1"
        cx="36.257"
        cy="27.553"
        r="11.69"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#bbc1c4"></stop>
        <stop offset=".652" stopColor="#bbc1c4"></stop>
        <stop offset=".74" stopColor="#c1c7c9"></stop>
        <stop offset=".861" stopColor="#d3d6d8"></stop>
        <stop offset="1" stopColor="#f0f0f0"></stop>
      </radialGradient>
      <circle
        cx="40"
        cy="22"
        r="5"
        fill="url(#PTH08zocUYAZh7xvCE~aha_h3FOPWMfgNnV_gr1)"
      ></circle>
      <radialGradient
        id="PTH08zocUYAZh7xvCE~ahb_h3FOPWMfgNnV_gr2"
        cx="36.257"
        cy="27.553"
        r="11.69"
        gradientTransform="matrix(-1 0 0 1 48 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#bbc1c4"></stop>
        <stop offset=".652" stopColor="#bbc1c4"></stop>
        <stop offset=".74" stopColor="#c1c7c9"></stop>
        <stop offset=".861" stopColor="#d3d6d8"></stop>
        <stop offset="1" stopColor="#f0f0f0"></stop>
      </radialGradient>
      <circle
        cx="8"
        cy="22"
        r="5"
        fill="url(#PTH08zocUYAZh7xvCE~ahb_h3FOPWMfgNnV_gr2)"
      ></circle>
      <linearGradient
        id="PTH08zocUYAZh7xvCE~ahc_h3FOPWMfgNnV_gr3"
        x1="24"
        x2="24"
        y1="14.955"
        y2="42.955"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f0f0f0"></stop>
        <stop offset="1" stopColor="#bbc1c4"></stop>
      </linearGradient>
      <ellipse
        cx="24"
        cy="29"
        fill="url(#PTH08zocUYAZh7xvCE~ahc_h3FOPWMfgNnV_gr3)"
        rx="19"
        ry="14"
      ></ellipse>
      <path
        fill="#d43a02"
        d="M30,23c-1.656-0.001-2.999,1.341-3,2.998c-0.001,1.656,1.341,2.999,2.998,3c0.001,0,0.002,0,0.002,0	c1.656,0.001,2.999-1.341,3-2.998c0.001-1.656-1.341-2.999-2.998-3C30.002,23,30.001,23,30,23z"
      ></path>
      <path
        fill="#d43a02"
        d="M18,23c-1.656-0.001-2.999,1.341-3,2.998c-0.001,1.656,1.341,2.999,2.998,3c0.001,0,0.002,0,0.002,0	c1.656,0.001,2.999-1.341,3-2.998c0.001-1.656-1.341-2.999-2.998-3C18.002,23,18.001,23,18,23z"
      ></path>
      <path
        fill="#64717c"
        d="M24.002,34.902c-3.252,0-6.14-0.745-8.002-1.902c1.024,2.044,4.196,4,8.002,4	c3.802,0,6.976-1.956,7.998-4C30.143,34.157,27.254,34.902,24.002,34.902z"
      ></path>
      <linearGradient
        id="PTH08zocUYAZh7xvCE~ahd_h3FOPWMfgNnV_gr4"
        x1="36.995"
        x2="41.392"
        y1="6.995"
        y2="11.392"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f0f0f0"></stop>
        <stop offset="1" stopColor="#bbc1c4"></stop>
      </linearGradient>
      <circle
        cx="39"
        cy="9"
        r="3"
        fill="url(#PTH08zocUYAZh7xvCE~ahd_h3FOPWMfgNnV_gr4)"
      ></circle>
    </svg>
  ),
  StackOverflow: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path fill="#607D8B" d="M9 28H12V42H9z"></path>
      <path fill="#607D8B" d="M9 39H35V42H9z"></path>
      <path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z"></path>
      <path
        fill="#A68A6E"
        d="M14.88 29H28.880000000000003V32H14.88z"
        transform="rotate(6.142 21.88 30.5)"
      ></path>
      <path
        fill="#EF6C00"
        d="M29.452 11.646H43.451V14.647H29.452z"
        transform="rotate(81.234 36.453 13.148)"
      ></path>
      <path
        fill="#FF9800"
        d="M23.576 13.578H37.574V16.579H23.576z"
        transform="rotate(60.79 30.576 15.079)"
      ></path>
      <path
        fill="#D38B28"
        d="M18.395 18.275H32.393V21.276H18.395z"
        transform="rotate(34.765 25.396 19.777)"
      ></path>
      <path
        fill="#C09553"
        d="M15.977 23.499H29.976V26.5H15.977z"
        transform="rotate(19.785 22.978 25.003)"
      ></path>
    </svg>
  ),

  Telegram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
      <path
        fill="#fff"
        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
      ></path>
      <path
        fill="#b0bec5"
        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
      ></path>
      <path
        fill="#cfd8dc"
        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
      ></path>
    </svg>
  ),

  Globe: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

// Function returns platform name + icon
export function checkSocialUrl(link: string): {
  icon: React.ReactNode;
  name: string;
} {
  let hostname: string;

  try {
    hostname = new URL(link).hostname.toLowerCase();
  } catch {
    return { name: "Website", icon: <SocialIcons.Globe /> };
  }

  const platforms: Array<{
    key?: string;
    exact?: string;
    name: string;
    icon: React.ReactNode;
  }> = [
    { key: "behance", name: "Behance", icon: <SocialIcons.Behance /> },
    {
      key: "dev",
      name: "Dev.to",
      icon: <SiDevdotto />,
    },
    { key: "dribbble", name: "Dribbble", icon: <SocialIcons.Dribbble /> },
    {
      key: "exercism",
      name: "Exercism",
      icon: <SiExercism />,
    },
    { key: "facebook", name: "Facebook", icon: <SocialIcons.Facebook /> },
    { key: "github", name: "GitHub", icon: <SocialIcons.GitHub /> },
    { key: "instagram", name: "Instagram", icon: <SocialIcons.Instagram /> },
    { key: "keybase", name: "Keybase", icon: <FaKeybase /> },
    { key: "linkedin", name: "LinkedIn", icon: <SocialIcons.LinkedIn /> },
    { key: "medium", name: "Medium", icon: <SocialIcons.Medium /> },
    { key: "patreon", name: "Patreon", icon: <FaPatreon /> },
    {
      key: "stackoverflow",
      name: "Stack Overflow",
      icon: <SocialIcons.StackOverflow />,
    },
    { key: "tinder", name: "Tinder", icon: <SocialIcons.Tinder /> },
    { key: "reddit", name: "Reddit", icon: <SocialIcons.Reddit /> },
    {
      key: "substack",
      name: "Substack",
      icon: <SiSubstack />,
    },
    { key: "tiktok", name: "TikTok", icon: <SocialIcons.TikTok /> },
    { key: "twitch", name: "Twitch", icon: <SocialIcons.Twitch /> },
    { key: "twitter", name: "Twitter / X", icon: <SocialIcons.Twitter /> },
    { key: "x", name: "Twitter / X", icon: <SocialIcons.Twitter /> },
    { key: "youtube", name: "YouTube", icon: <SocialIcons.YouTube /> },
    { key: "pinterest", name: "Pinterest", icon: <SocialIcons.Pinterest /> },
    { key: "soundcloud", name: "SoundCloud", icon: <FaSoundcloud /> },
    { key: "spotify", name: "Spotify", icon: <SocialIcons.Spotify /> },
    { key: "telegram", name: "Telegram", icon: <SocialIcons.Telegram /> },
    { exact: "t.me", name: "Telegram", icon: <SocialIcons.Telegram /> },
    { key: "vk", name: "VK", icon: <FaVk /> },
    {
      key: "lemmy",
      name: "Lemmy World",
      icon: <SiLemmy />,
    },
    {
      key: "linktr",
      name: "Linktree",
      icon: <SiLinktree />,
    },
    {
      key: "mastodon",
      name: "Mastodon",
      icon: <SiMastodon />,
    },
  ];

  const found = platforms.find((p) =>
    p.key
      ? hostname.includes(`${p.key}.`)
      : p.exact
        ? hostname.includes(p.exact)
        : false
  );

  if (found) {
    return { name: found.name, icon: found.icon };
  }

  return { name: "Website", icon: <SocialIcons.Globe /> };
}
