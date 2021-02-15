import { ApiProperty } from "@nestjs/swagger"
import { Exclude, Type } from "class-transformer"
import { QuestionDto, QuestionnaireDto } from "src/core"

class QuestionnairesQuestionDto implements QuestionDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    content: string

    @Exclude()
    questionnaireId: string

    @Exclude()
    questionnaire?: any

    @Exclude()
    createDate: string
}

export class QuestionnaireResponseDto implements QuestionnaireDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    title: string

    @ApiProperty()
    createDate: string

    @ApiProperty({ isArray: true, type: QuestionnairesQuestionDto })
    @Type(() => QuestionnairesQuestionDto)
    questions?: QuestionnairesQuestionDto[]
}
