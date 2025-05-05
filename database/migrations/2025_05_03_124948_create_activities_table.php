<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable(); //done
            $table->string('product_code')->nullable();//done
            $table->longText('description1')->nullable();//done
            $table->longText('description2')->nullable();//done
            $table->string('isVisible')->nullable();//done
            $table->string('sunday_from')->nullable();//done
            $table->string('sunday_to')->nullable();//done
            $table->string('monday_from')->nullable();//done
            $table->string('monday_to')->nullable();//done
            $table->string('tuesday_from')->nullable();//done
            $table->string('tuesday_to')->nullable();//done
            $table->string('wednesday_from')->nullable();//done
            $table->string('wednesday_to')->nullable();//done
            $table->string('thursday_from')->nullable();//done
            $table->string('thursday_to')->nullable();//done
            $table->string('friday_from')->nullable();//done
            $table->string('friday_to')->nullable();//done
            $table->string('saturday_from')->nullable();//done
            $table->string('saturday_to')->nullable();//done
            $table->string('duration')->nullable();//done
            $table->string('buffer_time')->nullable();//done
            $table->string('advance_from')->nullable();//done
            $table->string('advance_to')->nullable();//done
            $table->string('age_group')->nullable();//done
            $table->string('minimum')->nullable();//    
            $table->string('maximum')->nullable();//
            $table->string('per_person')->nullable();// 
            $table->string('per_package')->nullable();//
            $table->string('per_public')->nullable();//
            $table->string('per_private')->nullable();//
            $table->string('deposit')->nullable();//
            $table->string('isTax')->nullable();//
            $table->longText('tax_description')->nullable();//
            $table->string('tax_price')->nullable();//
            $table->string('cancellation')->nullable();
            $table->longText('email_message')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
