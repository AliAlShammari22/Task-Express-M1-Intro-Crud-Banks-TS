import express, { Request, Response } from "express";
import { accounts } from "../accounts";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.get("/accounts", (req: Request, res: Response) => {
  res.status(200).json(accounts);
});

app.get("/accounts/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const foundedAccount = accounts.find((account) => {
    if (account.id === id) {
      return true;
    } else {
      return false;
    }
  });
  if (foundedAccount) {
    res.status(200).json(foundedAccount);
  } else {
    res.status(404).json("not found");
  }
});

app.listen(8080, () => {
  console.log("running on 8080");
});
