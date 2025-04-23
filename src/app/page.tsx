"use client";
import { driftClient, wallet } from "@/lib/drift";
import bs58 from "bs58";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PositionsDialog } from "@/components/positions-dialog";
import { Suspense } from "react";

function formatWallet(wallet: string) {
  const start = wallet.slice(0, 4);
  const end = wallet.slice(-4);
  return `${start}...${end}`;
}

export default function Home() {
  console.log(driftClient);
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {/* {userAccounts.map((account) => {
        const name = bs58.encode(account.name);
        const perpPositions = account.perpPositions.filter(
          (position) => position.baseAssetAmount !== 0,
        );

        return (
          <Card key={name} className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                User Account: {formatWallet(name)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Authority:</span>
                    <span>{formatWallet(account.authority.toBase58())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Sub Account Id:
                    </span>
                    <span>{account.subAccountId}</span>
                  </div>
                </div>

                {perpPositions.length > 0 && (
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      Active Positions: {perpPositions.length}
                    </h3>
                    <Suspense fallback={"Client loading"}>
                      <PositionsDialog positions={perpPositions} />
                    </Suspense>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })} */}
    </div>
  );
}
