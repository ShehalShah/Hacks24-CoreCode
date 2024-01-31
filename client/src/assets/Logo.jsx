import React from "react";

const Logo = ({ color, width, height, type }) => {
  if (type === "home")
    return (
      <div className={`text-${color}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="currentColor"
          class="bi bi-house"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
      </div>
    );

  if (type === "dashboard")
    return (
      <div className={`text-${color}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="currentColor"
          class="bi bi-broadcast"
          viewBox="0 0 16 16"
        >
          <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        </svg>
      </div>
    );

  if (type === "summary")
    return (
      <div className={`text-${color}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="currentColor"
          class="bi bi-chat-left-text"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>
    );

  if (type === "collapse")
    return (
      <div className={`text-${color}`}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.54935 14.7L10.9473 15.9232C11.2382 16.1778 11.2677 16.62 11.0131 16.911C10.7585 17.2019 10.3163 17.2313 10.0254 16.9768L7.22536 14.5268C7.07345 14.394 6.98631 14.2019 6.98631 14C6.98631 13.7982 7.07345 13.6061 7.22536 13.4732L10.0254 11.0232C10.3163 10.7686 10.7585 10.7981 11.0131 11.0891C11.2677 11.38 11.2382 11.8222 10.9473 12.0768L9.54932 13.3H14.7C15.0865 13.3 15.4 13.6134 15.4 14C15.4 14.3867 15.0865 14.7 14.7 14.7H9.54935ZM25.2 19.6C25.2 21.1464 23.9464 22.4 22.4 22.4H5.59999C4.05359 22.4 2.79999 21.1464 2.79999 19.6V8.40001C2.79999 6.85361 4.05359 5.60001 5.59999 5.60001H22.4C23.9464 5.60001 25.2 6.85361 25.2 8.40001V19.6ZM16.8 21V7.00001H5.59999C4.8268 7.00001 4.19999 7.6268 4.19999 8.40001V19.6C4.19999 20.3732 4.8268 21 5.59999 21H16.8Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
};

export default Logo;