import React from 'react';
import { TOKEN_DETAILS } from './constants';

export default function TokenDetails() {
  return (
    <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <h3 className="text-sm text-white/60">Token Name</h3>
          <p className="text-lg font-semibold text-[#A3FF21]">{TOKEN_DETAILS.name}</p>
        </div>
        <div>
          <h3 className="text-sm text-white/60">Ticker</h3>
          <p className="text-lg font-semibold text-[#A3FF21]">{TOKEN_DETAILS.ticker}</p>
        </div>
        <div>
          <h3 className="text-sm text-white/60">Total Supply</h3>
          <p className="text-lg font-semibold text-[#A3FF21]">{TOKEN_DETAILS.totalSupply}</p>
        </div>
      </div>
    </div>
  );
}