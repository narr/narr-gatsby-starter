import React from 'react';

// https://webpack.js.org/concepts/loaders/#inline
import normalizeCss from '!!css-loader!normalize.css';

interface IobjectProp {
  [k: string]: unknown;
}

const Style = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: normalizeCss.toString(),
      }}
    />
  );
};

export interface HTMLProps {
  htmlAttributes: IobjectProp;
  bodyAttributes: IobjectProp;
  headComponents: React.ReactNode[];
  preBodyComponents: React.ReactNode[];
  body: string;
  postBodyComponents: React.ReactNode[];
}

export const HTML: React.SFC<HTMLProps> = props => {
  const {
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents,
  } = props;

  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <Style />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
