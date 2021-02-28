import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const serveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!serveyUser) {
      throw new AppError("Servey User does not exists!");
    }

    serveyUser.value = Number(value);

    await surveysUsersRepository.save(serveyUser);

    return response.json({ serveyUser });
  }
}

export { AnswerController };
