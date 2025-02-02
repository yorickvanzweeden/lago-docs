/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const WebDevCards = [
  {
    name: 'Airbyte (ETL)',
    image: 'https://logo.clearbit.com/airbyte.com',
    url: {
      page: '../../docs/integrations/data/airbyte',
    },
    description: (
      <Translate id="special.gocardless.description">
        Send billing data to any warehouses by using our integration with Airbyte ETL services.
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  image: string;
  url: {
    page?: string;
    codepen?: string;
  };
  description: JSX.Element;
}

function WebDevCard({ name, image, url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')} style={{border: "1px solid #c3c9d5"}}>
        <div className={clsx('card__image')}>
            <img src={image} style={{width: "30px", marginLeft: "15px", marginTop: "15px", borderRadius: "6px"}}></img>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="special.tryItButton">View documentation</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DataRows(): JSX.Element {
  return (
    <div className="row">
      {WebDevCards.map((special) => (
        <WebDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}
