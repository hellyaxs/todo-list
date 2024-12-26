class ItensController < ActionController::API
  before_action :set_item, only: %i[show update destroy]

  # GET /itens
  def index
    lista_id = params[:lista_id] # Obtém o ID da lista da URL
    @itens = Item.where(lista_id: lista_id)
    render json: @itens
  end

  # GET /itens/:id
  def show
    render json: @item
  end

  # POST /itens
  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item, status: :created
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /itens/:id
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /itens/:id
  def destroy
    @item.destroy
    head :no_content
  end

  private

  def set_item
    @item = Item.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Item não encontrado" }, status: :not_found
  end

  def item_params
    params.require(:item).permit(:titulo, :descricao_breve, :check, :detalhes_tarefa, :lista_id)
  end
end
