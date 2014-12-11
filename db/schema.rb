# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141211202547) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: true do |t|
    t.text     "content"
    t.integer  "question_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree

  create_table "assessments", force: true do |t|
    t.text     "name"
    t.text     "description"
    t.integer  "user_id"
    t.integer  "topic_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "assessments", ["topic_id"], name: "index_assessments_on_topic_id", using: :btree
  add_index "assessments", ["user_id"], name: "index_assessments_on_user_id", using: :btree

  create_table "materials", force: true do |t|
    t.text     "title"
    t.text     "content"
    t.text     "url"
    t.integer  "objective_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "materials", ["objective_id"], name: "index_materials_on_objective_id", using: :btree

  create_table "objectives", force: true do |t|
    t.text     "name"
    t.text     "description"
    t.integer  "topic_id"
    t.integer  "assessment_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "objectives", ["assessment_id"], name: "index_objectives_on_assessment_id", using: :btree
  add_index "objectives", ["topic_id"], name: "index_objectives_on_topic_id", using: :btree

  create_table "questions", force: true do |t|
    t.text     "title"
    t.text     "content"
    t.integer  "correct_answer_id"
    t.integer  "objective_id"
    t.integer  "assessment_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "questions", ["assessment_id"], name: "index_questions_on_assessment_id", using: :btree
  add_index "questions", ["correct_answer_id"], name: "index_questions_on_correct_answer_id", using: :btree
  add_index "questions", ["objective_id"], name: "index_questions_on_objective_id", using: :btree

  create_table "subjects", force: true do |t|
    t.text     "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "submissions", force: true do |t|
    t.integer  "answer_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "submissions", ["answer_id"], name: "index_submissions_on_answer_id", using: :btree
  add_index "submissions", ["user_id"], name: "index_submissions_on_user_id", using: :btree

  create_table "topics", force: true do |t|
    t.text     "name"
    t.text     "description"
    t.integer  "subject_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "topics", ["subject_id"], name: "index_topics_on_subject_id", using: :btree

  create_table "users", force: true do |t|
    t.text     "email"
    t.text     "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "assessments", "topics"
  add_foreign_key "assessments", "users"
  add_foreign_key "materials", "objectives"
  add_foreign_key "objectives", "assessments"
  add_foreign_key "objectives", "topics"
  add_foreign_key "questions", "assessments"
  add_foreign_key "questions", "objectives"
  add_foreign_key "submissions", "answers"
  add_foreign_key "submissions", "users"
  add_foreign_key "topics", "subjects"
  add_foreign_key "topics", "subjects"
end
