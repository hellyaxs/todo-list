class Lista < ApplicationRecord
    has_many :itens, dependent: :destroy
end
