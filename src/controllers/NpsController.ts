import { Response, Request } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";

import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

/**
 * CÁLCULO DE NPS:
 *
 * DETRATORES: notas entre 0 e 6
 * PASSIVOS: notas entre 7 e 8
 * PROMOTORES: notas entre 9 e 10
 *
 * ((NR. DE PROMOTORES - NR. DE DETRATORES) / NR. DE RESPONDENTES) X 100
 */

class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    });

    const detractor = surveyUsers.filter((survey) => survey.value >= 0 && survey.value <= 6).length;

    const passive = surveyUsers.filter((survey) => survey.value >= 7 && survey.value <= 8).length;

    const promoters = surveyUsers.filter((survey) => survey.value >= 9 && survey.value <= 10)
      .length;

    const totalAnswers = surveyUsers.length;

    const calculate = (((promoters - detractor) / totalAnswers) * 100).toFixed(2) + "%";

    return response.json({
      detractor,
      passive,
      promoters,
      totalAnswers,
      nps: calculate,
    });
  }
}

export { NpsController };
