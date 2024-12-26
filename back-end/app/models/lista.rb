class Lista < ApplicationRecord
    has_many :itens, class_name: "Item", dependent: :destroy
end
