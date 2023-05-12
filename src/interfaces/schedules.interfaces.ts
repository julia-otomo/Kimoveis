import { z } from "zod";
import {
  schedulesRequestSchema,
  schedulesResponseSchema,
  schedulesSchema,
} from "../schemas/schedules.schemas";

type TSchedule = z.infer<typeof schedulesSchema>;

type TScheduleRequest = z.infer<typeof schedulesRequestSchema>;

type TScheduleResponse = z.infer<typeof schedulesResponseSchema>;

interface IScheduleSuccess {
  message: string;
}

export { TSchedule, TScheduleRequest, TScheduleResponse, IScheduleSuccess };
