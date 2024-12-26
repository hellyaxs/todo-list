Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'  # Pode deixar '*' se não precisar de uma origem específica
  
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options],
        credentials: false  # Não precisa de credenciais
    end
  end