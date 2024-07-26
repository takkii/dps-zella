import type { Denops } from "https://deno.land/x/denops_std@v6.5.1/mod.ts";

export async function main(denops: Denops): Promise < void > {
    denops.dispatcher = {
        zella: async function(): Promise < void > {
            let env: any;
            let language: any;
            let OneDay: Date;
            let OneYear: number;
            let OneMonth: number;
            let anyDays: number;
            let anything_month: number;
            let calc: number;
            let week: string[];
            let cl_wk: string;
            let justnow: any;
            let fl_calc: any;
            this.OneDay = new Date()
            this.OneYear = this.OneDay.getFullYear()
            this.anything_month = this.OneDay.getMonth()
            this.OneMonth = this.anything_month + 1
            this.anyDays = this.OneDay.getDate()
            this.env = process.env;
            this.language = this.env.LANG || this.env.LANGUAGE || this.env.LC_ALL || this.env.LC_MESSAGES;

            if (this.OneYear % 4 == 0 && this.OneYear % 100 != 0 || this.OneYear % 400 == 0) {
                if (this.OneMonth == 2 && this.anyDays == 29) {
                    this.calc = ((365 * this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                        this.OneYear / 400 + (306 * (this.OneMonth + 1)) / 10 + this.anyDays) - 426) % 7;
                } else if (this.OneMonth == (2 && 4 && 6 && 9)) {
                    this.calc = ((365 * this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                        this.OneYear / 400 + (306 * (this.OneMonth + 1)) / 10 + this.anyDays) - 428) % 6;
                } else {
                    this.calc = ((365 * this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                        this.OneYear / 400 + (306 * (this.OneMonth + 1)) / 10 + this.anyDays) - 428) % 7;
                }
            } else {
                this.calc = (this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                    this.OneYear / 400 + (13 * this.OneMonth + 8) / 5 + this.anyDays) % 7
            }

            this.fl_calc = Math.floor(this.calc);
            this.week = ["Sun", "Mon", "Tues", "Wedness", "Thurs", "Fri", "Satur", "Sun"]
            this.cl_wk = (this.week[this.fl_calc])

            console.log(`${this.OneYear}/${this.OneMonth}/${this.anyDays} : ${this.cl_wk}day : ${this.language}`)
        }
    }
    denops.cmd(`command! Zella call denops#notify('${denops.name}', 'zella', [])`);
}
