import axios from 'axios';

import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiHandler } from 'next/dist/shared/lib/utils';

type SearchParameters = {
  Actions: {};
};

let SearchRequest = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  console.log('request: ', request);
  return {
    request,
    response,
  };
};
