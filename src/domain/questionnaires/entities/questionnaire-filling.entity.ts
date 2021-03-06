import { IQuestionnaireFilling } from "src/core"
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm"
import { QuestionAnswer } from "./question-answer.entity"
import { Questionnaire } from "./questionnaire.entity"

@Entity("questionnaires-fillings")
export class QuestionnaireFilling implements IQuestionnaireFilling {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Questionnaire)
    @JoinColumn({ name: "questionnaireId" })
    questionnaire?: Questionnaire
    @Column({ nullable: false })
    questionnaireId: string

    @OneToMany(
        () => QuestionAnswer,
        answer => answer.questionnaireFilling
    )
    answers?: QuestionAnswer[]

    @CreateDateColumn({ type: "timestamp", default: () => "LOCALTIMESTAMP" })
    createDate: string
}
