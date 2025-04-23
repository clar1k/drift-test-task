"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { driftClient } from "@/lib/drift";

type UserPositions = Awaited<
  ReturnType<typeof driftClient.getUserAccountsForAuthority>
>[number]["perpPositions"];

export function PositionsDialog(props: { positions: UserPositions }) {
  const activePositions = props.positions.filter(
    (pos) => pos.baseAssetAmount !== 0,
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Positions
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Position Details</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Market Index</TableHead>
                <TableHead>Base Amount</TableHead>
                <TableHead>Quote Amount</TableHead>
                <TableHead>Last Funding Rate</TableHead>
                <TableHead>Open Orders</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activePositions.map((position, index) => (
                <TableRow key={index}>
                  <TableCell>{position.marketIndex}</TableCell>
                  <TableCell>{String(position.baseAssetAmount)}</TableCell>
                  <TableCell>{String(position.quoteAssetAmount)}</TableCell>
                  <TableCell>
                    {String(position.lastCumulativeFundingRate)}
                  </TableCell>
                  <TableCell>{String(position.openOrders)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
