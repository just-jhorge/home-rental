import { properties } from "../../../data";

export default function handler(_, res) {
	res.status(200).json(properties);
}