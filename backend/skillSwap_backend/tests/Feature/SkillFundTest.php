<?php
//
//namespace tests\Feature;
//
//use Illuminate\Foundation\Testing\RefreshDatabase;
//use Tests\TestCase;
//use App\Models\SkillFund;
//use App\Models\Student;
//
//class SkillFundTest extends TestCase
//{
//    use RefreshDatabase;
//
//    /** @test */
//    public function it_can_create_a_skill_fund()
//    {
//        $this->withoutMiddleware();
//
//        $student =  Student::query()->create([
//            'id' => 1,
//            'speciality_id' => 1,
//            'faculty_id' => 1,
//            'university_id' => 1,
//            'name' => 'test',
//            'surname' => 'test',
//            'email' => 'test@test.com',
//            'password' => bcrypt('123'),
//            'course' => 4,
//            'is_student' => true,
//        ]);
//
//        $response = $this->post('/api/skill_funds/create', [
//            'student_id' => $student->id,
//            'title' => 'Test Skill Fund',
//            'content' => 'This is a test skill fund.',
//            'status' => true,
//            'amount_money' => 1000,
//            'planning_money' => 200000,
//            'photo' => 'https://example.com/test-photo.jpg',
//        ]);
//
//        $response->assertStatus(201);
//        $this->assertDatabaseHas('skill_funds', ['title' => 'Test Skill Fund']);
//    }
//
////    /** @test */
////    public function it_can_update_a_skill_fund()
////    {
////        $skillFund = SkillFund::factory()->create();
////
////        $response = $this->put("/api/skill-funds/{$skillFund->id}", [
////            'title' => 'Updated Skill Fund Title',
////        ]);
////
////        $response->assertStatus(200);
////        $this->assertDatabaseHas('skill_funds', ['title' => 'Updated Skill Fund Title']);
////    }
////
////    /** @test */
////    public function it_can_show_a_skill_fund()
////    {
////        $skillFund = SkillFund::factory()->create();
////
////        $response = $this->get("/api/skill-funds/{$skillFund->id}");
////
////        $response->assertStatus(200)
////            ->assertJson(['title' => $skillFund->title]);
////    }
////
////    /** @test */
////    public function it_can_delete_a_skill_fund()
////    {
////        $skillFund = SkillFund::factory()->create();
////
////        $response = $this->delete("/api/skill-funds/{$skillFund->id}");
////
////        $response->assertStatus(204);
////        $this->assertDatabaseMissing('skill_funds', ['id' => $skillFund->id]);
////    }
//}
