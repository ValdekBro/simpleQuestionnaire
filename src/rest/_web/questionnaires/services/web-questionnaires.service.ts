import { Inject, Injectable } from "@nestjs/common"
import {
    IPagination,
    IPaginationList,
    IQuestionaireFillingStorePayload,
    IQuestionaireStatistics,
    IQuestionaireStorePayload,
    IQuestionnaire,
    IQuestionnaireFilling,
    IQuestionnairesDomainService,
    QUESTIONNAIRES_DOMAIN_SERVICE
} from "src/core"
@Injectable()
export class WebQuestionnairesService {
    constructor(
        @Inject(QUESTIONNAIRES_DOMAIN_SERVICE)
        private questionnairesService: IQuestionnairesDomainService
    ) {}

    async store(payload: IQuestionaireStorePayload): Promise<IQuestionnaire> {
        return this.questionnairesService.store(payload)
    }

    async getOne(qiestionaireId: string): Promise<IQuestionnaire> {
        return this.questionnairesService.getOne(qiestionaireId)
    }

    async getMany(
        pagination?: IPagination
    ): Promise<IPaginationList<IQuestionnaire>> {
        return this.questionnairesService.getMany(pagination)
    }

    async getStatistics(): Promise<IQuestionaireStatistics> {
        return this.questionnairesService.getStatistics()
    }

    async storeAnswer(
        payload: IQuestionaireFillingStorePayload
    ): Promise<IQuestionnaireFilling> {
        return this.questionnairesService.storeAnswer(payload)
    }

    async getAnswers(
        questionnaireId: string,
        pagination?: IPagination
    ): Promise<IPaginationList<IQuestionnaireFilling>> {
        return this.questionnairesService.getAnswers(
            questionnaireId,
            pagination
        )
    }
}
