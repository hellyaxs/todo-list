class ListasController < ActionController::API
    before_action :set_lista, only: %i[show update destroy]

    # GET /listas
    def index
      @listas = Lista.all
      render json: @listas
    end
  
    # GET /listas/:id
    def show
      render json: @lista
    end
  
    # POST /listas
    def create
      @lista = Lista.new(lista_params)
      if @lista.save
        render json: @lista, status: :created
      else
        render json: @lista.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /listas/:id
    def update
      if @lista.update(lista_params)
        render json: @lista
      else
        render json: @lista.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /listas/:id
    def destroy
      @lista.destroy
      head :no_content
    end
  
    private
  
    def set_lista
      @lista = Lista.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Lista não encontrada" }, status: :not_found
    end
  
    def lista_params
      params.require(:lista).permit(:nome)
    end
end
