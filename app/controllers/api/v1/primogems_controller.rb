class Api::V1::PrimogemsController < ApplicationController
    skip_before_action :verify_authenticity_token, if: :json_request?

    def index
        render json: Primogem.all
    end
  
    def create
        # render json: {paimongems: dates_params}
        render json: {start_date: dates_params[:date_from], end_date: dates_params[:date_to].to_date, number_of_days: number_of_days, welkin: dates_params[:welkin], daily_primos: get_daily_primos, abyss: get_abyss_primos[:abyss_primos_total], battle_pass: get_battle_pass_rewards[:total_primogems], total_primogems: get_total_primogems, a_fates: get_battle_pass_rewards[:total_acquaint_fate], i_fates: get_battle_pass_rewards[:total_intertwined_fate]}

        # v_number_of_days = number_of_days
        # v_welkin = dates_params[:welkin]
        # v_daily_primos = get_daily_primos
        # v_abyss = get_abyss_primos[:abyss_primos_total]
        # v_battle_pass = get_battle_pass_rewards[:total_primogems]
        # v_total_primogems = else

        # if (v_number_of_days.any? or v_welkin.any? or v_daily_primos.any? or v_abyss.any? or v_battle_pass.any? or v_total_primogems.any?)
        #     render json: { number_of_days: number_of_days, welkin: dates_params[:welkin], daily_primos: get_daily_primos, abyss: get_abyss_primos[:abyss_primos_total], battle_pass: get_battle_pass_rewards[:total_primogems], total_primogems: get_total_primogems}
        # else
        #     render json: {error: 'Error Calculation'}, status: 401
        # end
    end
  
    def show

    end
  
    def destroy

    end
    
    private
    def json_request?
        request.format.json?
    end

    def error_test
        # days_count = (dates_params[:test_date].to_date  - dates_params[:date_from].to_date).to_i + 1

        # if days_count
        #     return true
        # else
        #     return false
        # end
    end

    def dates_params
        params.permit(:date_from, :date_to, :welkin, :bp, :current_primogems, :test_date)
        if !params[:date_from].present?
            params[:date_from] = Date.today.to_formatted_s(:iso8601)
        end
        if !params[:date_to].present?
            params[:date_to] = Date.today.to_formatted_s(:iso8601)
        end
        
    end

    def number_of_days
        (dates_params[:date_to].to_date  - dates_params[:date_from].to_date).to_i + 1
    end

    def get_daily_primos
        welkin_primo = 0
        daily_commision = 60
        is_welkin = dates_params[:welkin]
        
        if is_welkin
            welkin_primo = 90
            return (welkin_primo + daily_commision)*number_of_days
        else
            return (daily_commision * number_of_days)
        end
    end

    def get_abyss_primos
        abyss_reset_days = [1, 16]
        abyss_primos = 600
        abyss_reset_count = (dates_params[:date_from].to_date..dates_params[:date_to].to_date).to_a.select {|date| abyss_reset_days.include?(date.day)}.count

        return {abyss_reset_count: abyss_reset_count, abyss_primos: abyss_primos, abyss_primos_total: (abyss_reset_count*abyss_primos)}
        # return (abyss_reset_count*abyss_primos)
    end

    def get_total_primogems
        (
            get_daily_primos + get_abyss_primos[:abyss_primos_total] + dates_params[:current_primogems] + get_battle_pass_rewards[:total_primogems]
        )
    end

    def get_battle_pass
        version_dates = []
        version_year_limit = Date.new(2021, 12, 31)
        current_version = Date.new(2021, 6, 9)

        begin
            current_version += 6.week
            version_dates.append(current_version)
        end while current_version <= version_year_limit
        return version_dates
    end

    def get_battle_pass_reset_count
        bp_reset_count = (dates_params[:date_from].to_date..dates_params[:date_to].to_date).to_a.select {|date| get_battle_pass.include?(date)}.count
    end

    def get_battle_pass_rewards
        primos = 680
        acquaint_fate = 5 
        intertwined_fate = 4
        if dates_params[:bp]
            # if (get_battle_pass.include? dates_params[:date_to].to_date)
                return {reset_count: get_battle_pass_reset_count, total_primogems: (primos*get_battle_pass_reset_count), total_acquaint_fate: (acquaint_fate*get_battle_pass_reset_count), total_intertwined_fate: (intertwined_fate*get_battle_pass_reset_count)}
                
            # end
        else
            return {reset_count: get_battle_pass_reset_count, total_primogems: 0, total_acquaint_fate: (acquaint_fate*get_battle_pass_reset_count), total_intertwined_fate: 0}
        end
        # return {reset_count: get_battle_pass_reset_count}
    end
end